<?
    $n = strtolower($_GET['nome']);
	$f=($_GET['fields']);
	$c=($_GET['check']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	sleep(2);
    echo("Founded ".rand()." for $n , $f , $sMin , $sMax, $c");

?>