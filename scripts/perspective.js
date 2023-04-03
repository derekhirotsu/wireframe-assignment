/**
 * This is code for camera viewport and perspective calculations which 
 * is not entirely working yet. This is here for reference and should not
 * be implemented in its current state.
 */

/**
 * usePerspective: boolean which determines whether a camera veiwport should display
 * its contents using perspective calculations or not. i.e. wether the view is
 * orthographic or perspective.
 * 
 * useCamera: boolean which determines whether the image should be drawn from
 * the uvn-coordinates of a camera's viewport or using the xyz-coordinates of the
 * world.
 */
var usePerspective = true;
var useCamera = true;

/**
 * camera: the xyz-coordinates of the camera's location in the world
 * 
 * targetPoint: the point in xyz-coordinates which the camera is facing towards
 * (includes a homogenous coordinate for calculations)
 */
var camera = [123, 456, 789];
var targetPoint = [100, 100, -200, 1];

var vectorN;
var vectorV;
var vectorU;
var aMatrix;
function getUVN() {
	let vectN = [
		targetPoint[0] - camera[0],
		targetPoint[1] - camera[1],
		targetPoint[2] - camera[2]
	];

	vectorN = [
		vectN[0] / Math.sqrt(Math.pow(vectN[0], 2) + Math.pow(vectN[1], 2) + Math.pow(vectN[2], 2)),
		vectN[1] / Math.sqrt(Math.pow(vectN[0], 2) + Math.pow(vectN[1], 2) + Math.pow(vectN[2], 2)),
		vectN[2] / Math.sqrt(Math.pow(vectN[0], 2) + Math.pow(vectN[1], 2) + Math.pow(vectN[2], 2))
	];

	let vectV = [
		0 - vectorN[1] * vectorN[0],
		1 - vectorN[1] * vectorN[1],
		0 - vectorN[1] * vectorN[2]
	];

	vectorV = [
		vectV[0] / Math.sqrt(Math.pow(vectV[0], 2) + Math.pow(vectV[1], 2) + Math.pow(vectV[2], 2)),
		vectV[1] / Math.sqrt(Math.pow(vectV[0], 2) + Math.pow(vectV[1], 2) + Math.pow(vectV[2], 2)),
		vectV[2] / Math.sqrt(Math.pow(vectV[0], 2) + Math.pow(vectV[1], 2) + Math.pow(vectV[2], 2))
	];

	vectorU = [
		vectorN[1] * vectorV[2] - vectorV[1] * vectorN[2],
		vectorV[0] * vectorN[2] - vectorN[0] * vectorV[2],
		vectorN[0] * vectorV[1] - vectorV[0] * vectorN[1]
	];
}

var p_mat = [
	[1, 0, 0, 0],
	[0, 1, 0, 0],
	[0, 0, 1, -0.0001],
	[0, 0, 0, 1]
];


var tMatrix = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [-camera[0],-camera[1],-camera[2], 1]
];

var mMatrix = [
    [vectorU[0],vectorV[0],vectorN[0],0],
    [vectorU[1],vectorV[1],vectorN[1],0],
    [vectorU[2],vectorV[2],vectorN[2],0],
    [0,0,0,1]
]

aMatrix = mMult(tMatrix, mMatrix);

let uvnPoints =  mMult(newPoints, aMatrix);
if (usePerspective) {
    uvnPoints =  mMult(uvnPoints, p_mat);
    for(let i = 0; i < uvnPoints.length; ++i) {
        for(let j = 0; j < uvnPoints[i].length; ++j) {
            uvnPoints[i][j] = uvnPoints[i][j] / uvnPoints[i][3]; 
        }
    }
}