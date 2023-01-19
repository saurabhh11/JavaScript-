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
console.log(cylinder.getVolume()); // should return approximately 392.70

// Sphere
let sphere = new Sphere(5);
console.log(sphere.getVolume()); // should return approximately 523.59

// Cone
let cone = new Cone(5, 10);
console.log(cone.getVolume()); // should return approximately 52.35
