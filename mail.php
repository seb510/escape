<?php
if (isset($_POST['name']) && $_POST['email'] && isset($_POST['msg'])) {

    $result = array(
        'name' => $_POST['name'],
        'email' => $_POST['email'],
        'msg' => $_POST['msg'],
    );

    ob_end_clean();

    header('Content-Type: application/json');
    echo json_encode($result);
    exit();
} else {
    $result = '0';
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    die;
}
