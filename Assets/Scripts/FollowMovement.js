#pragma strict

private var previousPosition : Vector3;

function Start () {
	previousPosition = transform.position;
}

function Update () {
	var difference = transform.position - previousPosition;
	if (difference.magnitude > 0.01) {
		transform.localRotation = Quaternion.LookRotation(difference);
	}
	previousPosition = transform.position;
}