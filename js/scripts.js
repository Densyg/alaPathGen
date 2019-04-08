// Stolen from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
const copyToClipboard = id => {
    var toCopy = document.getElementById(id);
    
    const el = document.createElement('textarea');
    el.value = toCopy.value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    var label = 'copied1'; 

    // SURFACING IF STATEMENTS
    if (id === 'field_sp1') label = 'copied1';
    else if (id === "field_sp2") label = 'copied2';
    else if (id === "field_katana1") label = 'copied3';
    else if (id === "field_katana2") label = 'copied4';
    else if (id === "field_rv1") label = 'copied5';

    // R&D IF STATEMENTS
    if (id === 'turret0') label = 'copied1';
    else if (id === "field_turret1") label = 'copied2';
    else if (id === "field_turret2") label = 'copied3';

    // MISC IF STATEMENTS


    // Play "Copied!" animation
    var copyLabel = document.getElementById(label);
    copyLabel.className = "copied";
    setTimeout(function(){
        copyLabel.className = "notcopied";
        
    }, 1200); 

  };

function copyTransition(id){



}


// Populates the placeholders in the filepaths with user input
function populate() {
    //surfacing variables
    var name=document.getElementById('name').value;
    var assetName=document.getElementById('assetName').value;
    var assetType=document.getElementById('assetType').value;
    var version=document.getElementById('version').value;
    var links=document.getElementById('links');
    var field_sp1 = document.getElementById('field_sp1').value;
    var field_sp2 = document.getElementById('field_sp2').value;
    var field_katana1=document.getElementById('field_katana1');
    var field_katana2=document.getElementById('field_katana2');
    var field_rv1=document.getElementById('field_rv1');

    // turret2path variables
    var turret_path=document.getElementById('turret_path');
    var turret_uri=document.getElementById('turret_uri');
    var field_turret1=document.getElementById('field_turret1');
    var field_turret2=document.getElementById('field_turret2');

    // Unlock field
    field_sp1.readonly = false;
    field_sp2.readonly = false;
    field_katana1.readonly = false;
    field_katana2.readonly = false;
    field_rv1.readonly = false;
    field_turret1.readonly = false;
    field_turret2.readonly = false;

    if (name === '') {
        name='$AUTHOR';
    }
    if (assetName === '') {
        assetName='$ASSET_NAME';
    }
    if (assetType === '') {
        assetType='$ASSET_TYPE';
    }
    if (version === '') {
        version='$VERSION';
    }

    if (turret_path === '') turret_path = "$FILEPATH";
    if (turret_uri === '') turret_path = "$TANK_QUERY";

    var str = "";
    var spImport = `/mnt/ala/mav/2019/jobs/s119/assets/${assetType}/${assetName}/model/model/caches/abc`;
    var spExport = `/mnt/ala/mav/2019/wip/s119/assets/${assetType}/${assetName}/surfacing/textures/${name}/substancePainter/build/${version}`;
    var katanaExport = `/mnt/ala/mav/2019/wip/s119/assets/${assetType}/${assetName}/surfacing/textures/${name}/substancePainter/build/${version}`;
    var katanaUsdOpen = `/mnt/ala/mav/2019/jobs/s119/assets/${assetType}/${assetName}/model/model/caches/usd`;
    var rvOpen = `/mnt/ala/mav/2019/wip/s119/assets/${assetType}/${assetName}/surfacing/lookfiles/${name}/katana/renders/default/${version}/primary/beauty/1920x1080/acescg/exr`;

    var path2uri = `python -c &#34;from turret import resolver; print resolver.filepath_to_uri('${turret_path}')&#34;`;
    var uri2path = `python -c &#34;from turret import resolver; print resolver.uri_to_filepath('${turret_uri}')&#34;`;

    field_sp1.value = spImport;
    field_sp2.value = spExport;
    field_katana1.value = katanaExport;
    field_katana2.value = katanaUsdOpen;
    field_rv1.value = rvOpen;
    field_turret1.value = path2uri;
    field_turret2.value = uri2path;


}
