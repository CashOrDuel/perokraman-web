<?php
$n = 5;

for ($i = $n; $i >= 1; $i--) {
    for ($j = $i; $j < $n; $j++) {
        echo "&nbsp;&nbsp;";
    }
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>";
}