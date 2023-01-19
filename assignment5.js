1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.

Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.


class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    getVolume() {
        return (4/3 * Math.PI * Math.pow(this.radius, 3)).toFixed(4);
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height / 3).toFixed(4);
    }
}
// Cylinder
let cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume()); 

// Sphere
let sphere = new Sphere(5);
console.log(sphere.getVolume()); 

// Cone
let cone = new Cone(5, 10);
console.log(cone.getVolume()); 
