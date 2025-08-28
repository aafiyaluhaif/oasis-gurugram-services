<?php
// Allow CORS
header("Access-Control-Allow-Origin: *"); // Or use a specific domain instead of '*'
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST method allowed']);
    exit;
}

// Read JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($data['name'], $data['phone'], $data['branch'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing fields']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$phone = htmlspecialchars($data['phone']);
$branch = htmlspecialchars($data['branch']);

// Prepare email
$to = 'saifiaafiya1227@gmail.com'; // <-- Replace with your email
$subject = "New Consultation Booking from $name";
$message = "You have received a new consultation request:\n\nName: $name\nPhone: $phone\nBranch: $branch";
$headers = "From: no-reply@yourdomain.com";

// Send email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
