var pathNames = ['/mnt/ala/mav/2019/jobs/s119/assets/setPiece/$ASSET/model/model/caches/abc',
            '/mnt/ala/mav/2019/wip/s119/assets/setPiece/$ASSET/surfacing/textures/naomi.que/substancePainter/build/$VERSION',
            '/mnt/ala/mav/2019/wip/s119/assets/setPiece/$ASSET/surfacing/textures/naomi.que/substancePainter/build/$VERSION',
            '/mnt/ala/mav/2019/wip/s119/assets/setPiece/$ASSET/surfacing/lookfiles/naomi.que/katana/renders/default/$VERSION/primary/beauty/1920x1080/acescg/exr'];

function hello() {
    var links = document.getElementById('links');
    links.innerHTML = 'Hello it is I, js';
}

function copy(id) {
    //alert('Found' + id);
    var copyText = Document.getElementById(id);
    copyText.select();
    document.execCommand('copy');
    alert('copied text');
}

function populate() {
    var name=document.getElementById('name').value;
    var asset=document.getElementById('asset').value;
    var version=document.getElementById('version').value;
    var links=document.getElementById('links');
    var field_sp1 = document.getElementById('field_sp1');
    var field_sp2 = document.getElementById('field_sp2');
    var field_katana1=document.getElementById('field_katana1');
    var field_rv1=document.getElementById('field_rv1');

    // Unlock field
    field_sp1.readonly = false;
    field_sp2.readonly = false;
    field_katana1.readonly = false;
    field_rv1.readonly = false;
    if (name === '') {
        name='$NAME';
    }
    if (asset === '') {
        asset='$ASSET';
    }
    if (version === '') {
        version='$VERSION';
    }
    var str = "";
    var spImport = `/mnt/ala/mav/2019/jobs/s119/assets/setPiece/${asset}/model/model/caches/abc`;
    var spExport = `/mnt/ala/mav/2019/wip/s119/assets/setPiece/${asset}/surfacing/textures/${name}/substancePainter/build/${version}`;
    var katanaExport = `/mnt/ala/mav/2019/wip/s119/assets/setPiece/${asset}/surfacing/textures/${name}/substancePainter/build/${version}`;
    var rvOpen = `/mnt/ala/mav/2019/wip/s119/assets/setPiece/${asset}/surfacing/lookfiles/${name}/katana/renders/default/${version}/primary/beauty/1920x1080/acescg/exr`;


    //links.innerHTML = `${asset}`;
    field_sp1.value = spImport;
    field_sp2.value = spExport;
    field_katana1.value = katanaExport;
    field_rv1.value = rvOpen;

    //document.body.appendChild(form);
}
