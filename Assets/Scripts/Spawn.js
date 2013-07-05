#pragma strict

var prefab : GameObject;
var interval : float;

function Start () {
	while (true) {
		Instantiate(prefab);
		yield WaitForSeconds(interval);
	}
}
