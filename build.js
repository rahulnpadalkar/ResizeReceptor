({

    paths:{
        "resize.receptor.core":"resizeReceptor/resize.receptor.core",
        "resize.receptor.store":"resizeReceptor/resize.receptor.store"
    },
    optimize:"uglify",
    baseUrl:'./',
    dir:'./dist-build',
    modules:[{
        name:"resize-receptor"
    }],
    writeBuildTxt: false,
    fileExclusionRegExp:/demo|lib|build.js/

})