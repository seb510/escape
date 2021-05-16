<?php
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['msg'])) {
    die;
} else {
    $res = " ";
    foreach ($_POST as $key => $value) {
        if ($key === 'name') {
            $first = "Имя: ";
        }
        if ($key === 'email') {
            $first = "Email: ";
        }
        if ($key === 'msg') {
            $first = "Сообщения: ";
        }
        $res .= "<tr><td>$first</td><td>$value</td></tr>";
    }

    echo $res;
    die;
}
