function hello() {
    var links = document.getElementById('links');
    links.innerHTML = 'Hello it is I, js';
}


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
    if (id === 'field_sp1') label = 'copied1';
    else if (id === "field_sp3") label = 'copied2';
    else if (id === "field_katana1") label = 'copied3';
    else if (id === "field_katana2") label = 'copied4';
    else if (id === "field_rv1") label = 'copied5';
    else if (id === "field_publish1") label = 'copied6';
    else if (id === "field_sp2") label = 'copied7';

    var copyLabel = document.getElementById(label);
    copyLabel.className = "copied";
    setTimeout(function(){
        copyLabel.className = "notcopied";
        
    }, 1200); 

  };

function copyTransition(id){



}


function populate() {
    var name=document.getElementById('name').value;
    var assetName=document.getElementById('assetName').value;
    var assetType=document.getElementById('assetType').value;
    var version=document.getElementById('version').value;
    var submaterial=document.getElementById('submaterial').value;
    var year=document.getElementById('year').value;
    var studioCode=document.getElementById('studioCode').value;
    var links=document.getElementById('links'); // Is this still being used?
    var field_sp1 = document.getElementById('field_sp1');
    var field_sp2 = document.getElementById('field_sp2');
    var field_sp3 = document.getElementById('field_sp3');
    var field_katana2=document.getElementById('field_katana2');
    var field_rv1=document.getElementById('field_rv1');
    var field_publish1=document.getElementById('field_publish1');

    // Unlock field
    field_sp1.readonly = false;
    field_sp2.readonly = false;
    field_sp3.readonly = false;
    field_katana2.readonly = false;
    field_rv1.readonly = false;
    field_publish1.readonly = false;
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
    if (year === '') {
        version='$YEAR';
    }
    if (studioCode === '') {
        version='$STUDIO_CODE';
    }
    if (submaterial === '') {
        submaterial='defaultMaterial';
    }
    var str = "";
    var spImport = `/mnt/ala/mav/${year}/jobs/${studioCode}/assets/${assetType}/${assetName}/model/model/caches/fbx`;
    var spSave = `/mnt/ala/mav/${year}/wip/${studioCode}/assets/${assetType}/${assetName}/surfacing/surfacing/${name}/substancePainter/build`;
    var spExport = `/mnt/ala/mav/${year}/wip/${studioCode}/assets/${assetType}/${assetName}/surfacing/surfacing/${name}/katana/textures/${submaterial}`;
    var katanaUsdOpen = `/mnt/ala/mav/${year}/jobs/${studioCode}/assets/${assetType}/${assetName}/model/model/caches/usd`;
    var rvOpen = `/mnt/ala/mav/${year}/wip/${studioCode}/assets/${assetType}/${assetName}/surfacing/surfacing/${name}/katana/renders/default/${version}/primary/beauty/1920x1080/acescg/exr`;
    var publish1 = `/mnt/ala/mav/${year}/jobs/${studioCode}/assets/${assetType}/${assetName}/surfacing/surfacing/material/${submaterial}/${version}`;

    //links.innerHTML = `${asset}`;
    field_sp1.value = spImport;
    field_sp2.value = spSave;
    field_sp3.value = spExport;
    field_katana2.value = katanaUsdOpen;
    field_rv1.value = rvOpen;
    field_publish1.value = publish1;

    //document.body.appendChild(form);
}
