#pragma strict

var smokeEffect : GameObject;

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		CheckHit(Input.mousePosition);
	}
	for (var touch in Input.touches) {
		CheckHit(touch.position);
	}
}

function CheckHit(position : Vector3) {
	var ray = Camera.main.ScreenPointToRay(position);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit)) {
		if (hit.collider.name == "Mouse") {
			audio.Play();
			Instantiate(smokeEffect, hit.transform.position, hit.transform.rotation);
			Destroy(hit.transform.parent.parent.gameObject);
		}
	}
}
