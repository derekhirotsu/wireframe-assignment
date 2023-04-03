/**
 * mMult
 * Multiplies two given matricies and returns the produced matrix.
 * a - the first matrix
 * b - the second matrix
 * m - the product matrix of a and b
 */
function mMult(a, b)
{
	// initialize array of rows
	let m = new Array(a.length);  
	for (let r = 0; r < a.length; ++r) 
	{
		// initialize the current row
		m[r] = new Array(b[0].length); 
		for (let c = 0; c < b[0].length; ++c) 
		{
			// initialize the current cell
			m[r][c] = 0;             
			for (let i = 0; i < a[0].length; ++i) 
			{
				m[r][c] += a[r][i] * b[i][c];
			}
		}
	}
	return m;
}

/**
 * translate
 * Multiplies a given matrix by a translation matrix and returns the
 * produced matrix.
 * mtx - the matrix to translate
 * x - the value to translate along the x-axis
 * y - the value to translate along the y-axis
 * z - the value to translate along the z-axis
 */
function translate(mtx, x, y, z)
{
	if(typeof x === 'number' && typeof y === 'number' && typeof z === 'number')
	{
		let tArr = [
			[1, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 1, 0],
			[x, y, z, 1],
		];
		return mMult(mtx, tArr);
	}
	return null;
}

/**
 * reflectX
 * Reflects the x values of a given matrix and returns the resulting
 * matrix.
 * mtx - the matrix to refect
 */
function reflectX(mtx)
{
	let tArr = [
		[-1,0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];
	return mMult(mtx, tArr);
}

/**
 * reflectY
 * Reflects the y values of a given matrix and returns the resulting
 * matrix.
 * mtx - the matrix to refect
 */
function reflectY(mtx)
{
	let tArr = [
		[1, 0, 0, 0],
		[0,-1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];
	return mMult(mtx, tArr);
}

/**
 * reflectZ
 * Reflects the z values of a given matrix and returns the resulting
 * matrix.
 * mtx - the matrix to refect
 */
function reflectZ(mtx)
{
	let tArr = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0,-1, 0],
		[0, 0, 0, 1]
	];
	return mMult(mtx, tArr);
}

/**
 * scale
 * Multiplies a given matrix by a scaling matrix and returns the
 * produced matrix.
 * mtx - the matrix to scale
 * x - the value to scale along the x-axis
 * y - the value to scale along the y-axis
 * z - the value to scale along the z-axis
 */
function scale(mtx, x, y, z)
{
	if(typeof x === 'number' && typeof y === 'number' && typeof z === 'number')
	{
		let tArr = [
			[x, 0, 0, 0],
			[0, y, 0, 0],
			[0, 0, z, 0],
			[0, 0, 0, 1],
		];
		return mMult(mtx, tArr);
	}
	return null;
}

/**
 * rotateOnXAxis
 * Rotates a given matrix around the x-axis by a given amount
 * in radians and returns the resulting matrix.
 * mtx - the matrix to rotate
 * theta - the amount in radians to rotate the matrix by
 */
function rotateOnXAxis(mtx, theta)
{
	if(typeof theta === 'number')
	{
		let tArr = [
			[1, 0, 0, 0],
			[0, Math.cos(theta),-Math.sin(theta), 0],
			[0, Math.sin(theta), Math.cos(theta), 0],
			[0, 0, 0, 1],
		];
		return mMult(mtx, tArr);
	}
	return null;
}

/**
 * rotateOnYAxis
 * Rotates a given matrix around the y-axis by a given amount
 * in radians and returns the resulting matrix.
 * mtx - the matrix to rotate
 * theta - the amount in radians to rotate the matrix by
 */
function rotateOnYAxis(mtx, theta)
{
	if(typeof theta === 'number')
	{
		let tArr = [
			[Math.cos(theta), 0, Math.sin(theta), 0],
			[0, 1, 0, 0],
			[-Math.sin(theta), 0, Math.cos(theta), 0],
			[0, 0, 0, 1]
		];
		return mMult(mtx, tArr);
	}
	return null;
}

/**
 * rotateOnZAxis
 * Rotates a given matrix around the z-axis by a given amount
 * in radians and returns the resulting matrix.
 * mtx - the matrix to rotate
 * theta - the amount in radians to rotate the matrix by
 */
function rotateOnZAxis(mtx, theta)
{
	if(typeof theta === 'number')
	{
		let tArr = [
			[Math.cos(theta),-Math.sin(theta), 0, 0],
			[Math.sin(theta), Math.cos(theta), 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1],
		];
		return mMult(mtx, tArr);
	}
	return null;
}

/**
 * horizontalShear
 * Shears a given matrix by horizontally by a given amount and
 * returns the resulting matrix.
 * mtx - the matrix to shear
 * m - the amound to shear the matrix by
 */
function horizontalShear(mtx, m) 
{
	if(typeof m === 'number')
	{
		let tArr = [
			[1, 0, 0, 0],
			[m, 1, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1],
		];
		return mMult(mtx, tArr);
	}
	return null;
}