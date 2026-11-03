<?php
// Café Weiss — Production PHP Endpoint for Weekly Lunch Menu Admin & Auto-Scheduler
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$dataFile = __DIR__ . '/../data/lunch-schedules.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        readfile($dataFile);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Schedule file not found']);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload || !isset($payload['schedules']) || !is_array($payload['schedules'])) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid payload']);
        exit;
    }

    $existingPin = '2020';
    if (file_exists($dataFile)) {
        $existing = json_decode(file_get_contents($dataFile), true);
        if (isset($existing['pin'])) {
            $existingPin = $existing['pin'];
        }
    }

    $payload['pin'] = !empty($payload['pin']) ? $payload['pin'] : $existingPin;
    $payload['updatedAt'] = date('c');

    usort($payload['schedules'], function ($a, $b) {
        return strcmp($a['validFrom'] ?? '', $b['validFrom'] ?? '');
    });

    if (file_put_contents($dataFile, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(['ok' => true, 'updatedAt' => $payload['updatedAt']]);
    } else {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Could not write to data/lunch-schedules.json']);
    }
    exit;
}

