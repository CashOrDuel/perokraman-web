<?php
$n = 5;

for ($i = 1; $i <= $n; $i++) {
    for ($j = $i; $j < $n; $j++) {
        echo "&nbsp;&nbsp;";
    }
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>";
}