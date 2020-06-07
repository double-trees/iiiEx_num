 window.addEventListener('load', init);

      function init() {
        // サイズを指定
        const width = window.innerWidth;
          const height = window.innerHeight;

        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#myCanvas')
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // シーンを作成
        const scene = new THREE.Scene();

        // カメラを作成
        const camera = new THREE.PerspectiveCamera(
          45,
          width / height,
          0.1,
          10000
        );
        // カメラの初期座標を設定
        camera.position.set(0, 10, 10);

        // カメラコントローラーを作成
 /*       const controls = new THREE.OrbitControls(camera);
        controls.target.set(0, 3, 0);
        controls.update();
*/
        // 平行光源を作成
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        // 環境光を追加
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

    var mash;

//ここにstlファイルを記述
var model_load="sample.stl";

var loader = new THREE.STLLoader();
    loader.addEventListener( 'load', function ( event ) {
    var geometry = event.content;
    var material = new THREE.MeshLambertMaterial( { ambient: 0xff5533, color: 0xff5533} );
    mash = new THREE.Mesh( geometry, material );                  
                               
    scene.add( mash );          
 } );
loader.load( model_load ); 

        tick();

        // 毎フレーム時に実行されるループイベントです
        function tick() {
          // レンダリング
          renderer.render(scene, camera);
          requestAnimationFrame(tick);
        }
      }