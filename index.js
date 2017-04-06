  var link_base = "https://api.katabamia.me/v1/ssg/index.php?";
var lnk = "";
  
  var isPrev = document.getElementById("isprev");
  var lb = document.getElementById("gen");
  var rb = document.getElementById("geno");
  var cp = document.getElementById("cp");
  
function generate() {
    var cs  = "cs=" + document.ssglm.cs.value + "&";
    var css = "css=" + document.ssglm.css.value + "&";
    var ns  = "ns=" + document.ssglm.ns.value + "&";
    var nss = "nss=" + document.ssglm.nss.value + "&";
    var ps  = "ps=" + document.ssglm.ps.value + "&";
    var pss = "pss=" + document.ssglm.pss.value + "&";
    var ip = "";
    var hex = "hex=" + document.ssglm.hex.value;
    
    if(isPrev.checked == true) {
      ip = "ip=true&";
    }
    
    lnk = link_base + cs + css + ns + nss + ps + pss + ip + hex;
    
    document.output.link.value = lnk;
}

  lb.onclick = function() {
    generate();
	}
  rb.onclick = function() {
    generate();
    window.open(lnk);
	}
  cp.onclick = function() {
    if(execCopy(document.output.link.value)){
    alert('コピーできました');
  }
  else {
    alert('このブラウザでは対応していません');
  }
  }
  
  
function execCopy(string){
  var temp = document.createElement('textarea');

  temp.value = string;
  temp.selectionStart = 0;
  temp.selectionEnd = temp.value.length;

  var s = temp.style;
  s.position = 'fixed';
  s.left = '-100%';

  document.body.appendChild(temp);
  temp.focus();
  var result = document.execCommand('copy');
  temp.blur();
  document.body.removeChild(temp);
  // true なら実行できている falseなら失敗か対応していないか
  return result;
}
