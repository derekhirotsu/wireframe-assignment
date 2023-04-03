/**
 * translateLeft
 * Updates the cumulative transformation matrix with a translation
 * in the negative-x direction and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function translateLeft()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, -75, 0, 0)
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * translateRight
 * Updates the cumulative transformation matrix with a translation
 * in the positive-x direction and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function translateRight()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, 75, 0, 0);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * translateUp
 * Updates the cumulative transformation matrix with a translation
 * in the positive-y direction and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function translateUp()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, 0, -35, 0);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * translateRight
 * Updates the cumulative transformation matrix with a translation
 * in the negative-y direction and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function translateDown()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, 0, 35, 0);
	newPoints = mMult(points, cTrans);
	draw();
}

function translateForward()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, 0, 0, 35);
	newPoints = mMult(points, cTrans);
	draw();
}

function translateBackwards()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	cTrans = translate(cTrans, 0, 0, -35);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * scaleUp
 * Updates the cumulative transformation matrix with increased
 * scaling by 10% and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function scaleUp()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = scale(cTrans, 1.1, 1.1, 1.1);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * scaleUp
 * Updates the cumulative transformation matrix with decreased
 * scaling by 10% and mulitplies the matrix with the
 * matrix of vertices. Draws the result. 
 */
function scaleDown()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = scale(cTrans, 0.9, 0.9, 0.9);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * rotateAroundX
 * Updates the cumulative transformation matrix with a series of
 * transformations to rotate a shape on the x-axis around its
 * centre. Draws the result. 
 */
function rotateAroundX()
{
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = rotateOnXAxis(cTrans, 0.05);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}	

/**
 * rotateAroundY
 * Updates the cumulative transformation matrix with a series of
 * transformations to rotate a shape on the y-axis around its
 * centre. Draws the result. 
 */
function rotateAroundY()
{
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = rotateOnYAxis(cTrans, 0.05);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}	

/**
 * rotateAroundZ
 * Updates the cumulative transformation matrix with a series of
 * transformations to rotate a shape on the z-axis around its
 * centre. Draws the result. 
 */
function rotateAroundZ()
{
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = rotateOnZAxis(cTrans, 0.05);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}	

/**
 * shearLeft
 * Updates the cumulative transformation matrix with a series of
 * transformations to shear a shape in the negative-x direction.
 * Draws the result. 
 */
function shearLeft()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = horizontalShear(cTrans, 0.1);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * shearLeft
 * Updates the cumulative transformation matrix with a series of
 * transformations to shear a shape in the positive-x direction.
 * Draws the result. 
 */
function shearRight()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	let center = newPoints[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = horizontalShear(cTrans, -0.1);
	cTrans = translate(cTrans, center[0], center[1], center[2]);
	newPoints = mMult(points, cTrans);
	draw();
}

/**
 * spinAboutX
 * Coninuously rotates a shape around the x-axis.
 */
function spinAboutX()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	else
	{
		spin = setInterval(rotateAroundX, 60);
		isSpinning = true;
	}
}

/**
 * spinAboutX
 * Coninuously rotates a shape around the y-axis.
 */
function spinAboutY()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	else
	{
		spin = setInterval(rotateAroundY, 60);
		isSpinning = true;
	}
}

/**
 * spinAboutX
 * Coninuously rotates a shape around the z-axis.
 */
function spinAboutZ()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	else
	{
		spin = setInterval(rotateAroundZ, 60);
		isSpinning = true;
	}
}

/**
 * Resets the shape to its original size, position and orientation.
 */
function reset()
{
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	initTranslate();
	draw();
}

function changeToPyramid() {
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	points = pyramid.points;
	lines = pyramid.lines;
	initTranslate();
	draw();
}

function changeToCube() {
	if(isSpinning)
	{
		clearInterval(window.spin);
		isSpinning = false;
	}
	points = cube.points;
	lines = cube.lines;
	initTranslate();
	draw();
}


function toggleCamera() {
	useCamera = !useCamera;
	draw();
}

function togglePerspective() {
	usePerspective = !usePerspective;
	draw();
}
