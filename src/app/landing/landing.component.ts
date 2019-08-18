import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';


@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
	camera: THREE.PerspectiveCamera;
	scene: THREE.Scene;
	renderer: THREE.WebGLRenderer;
	geometry: THREE.Geometry;
	material: THREE.MeshLambertMaterial;
	mesh: THREE.Mesh;
	clock: THREE.Clock;
	smokeParticles: Array<THREE.Mesh>;

	@ViewChild('canvas', { static: false }) private canvas: ElementRef;

	constructor() { }

	ngAfterViewInit(): void {
		this.init();
		this.animate();
	}

	init() {
		this.clock = new THREE.Clock();

		this.renderer = new THREE.WebGLRenderer(
			{
				canvas: this.canvas.nativeElement,
				antialias: true,
				alpha: true
			}
		);
		this.renderer.setClearColor(0xffffff, 0);
		this.renderer.setSize(this.canvas.nativeElement.clientWidth, this.canvas.nativeElement.clientHeight);

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(90, this.getAspectRatio(), 1, 1000);
		this.camera.position.z = 1000;
		this.scene.add(this.camera);

		const light = new THREE.DirectionalLight(0xffffff, 1.0);
		light.position.set(-1, 0, 1);
		this.scene.add(light);

		const texLoader = new THREE.TextureLoader();
		const smokeTexture = texLoader.load('assets/Smoke-Element.png');
		const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0xeeeeee, map: smokeTexture, transparent: true });
		const smokeGeo = new THREE.PlaneGeometry(300, 300);
		this.smokeParticles = [];


		for (let p = 0; p < 150; p++) {
			const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
			particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
			particle.rotation.z = Math.random() * 360;
			this.scene.add(particle);
			this.smokeParticles.push(particle);
		}
	}

	animate() {
		// note: three.js includes requestAnimationFrame shim
		const delta = this.clock.getDelta();
		requestAnimationFrame(this.animate.bind(this));
		this.evolveSmoke(delta);
		this.render();
	}

	evolveSmoke(delta: number) {
		let sp = this.smokeParticles.length;
		while (sp--) {
			this.smokeParticles[sp].rotation.z += (delta * 0.2);
		}
	}

	render() {

		this.renderer.render(this.scene, this.camera);

	}

	private getAspectRatio(): number {
		const height = this.canvas.nativeElement.clientHeight;
		if (height === 0) {
			return 0;
		}
		return this.canvas.nativeElement.clientWidth / this.canvas.nativeElement.clientHeight;
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: Event) {
		this.canvas.nativeElement.style.width = '100%';
		this.canvas.nativeElement.style.height = '100%';

		this.camera.aspect = this.getAspectRatio();
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.canvas.nativeElement.clientWidth, this.canvas.nativeElement.clientHeight);
		this.render();
	}
}
