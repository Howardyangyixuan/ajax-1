console.log("hi");
// css
const getCSS = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log(request.response);
    console.log("success");
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("fail");
  };
  request.send();
};
$(".getCSS").on("click", getCSS);
//js
const getJS = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("success");
    const js = document.createElement("script");
    js.innerHTML = request.response;
    document.body.appendChild(js);
    // const js = $('<script src="2.js"></script>');
    // js.appendTo($("body"));
  };
  request.onerror = () => {
    console.log("fail");
  };
  request.send();
};
$(".getJS").on("click", getJS);
//html
const getHTML = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const html = document.createElement("div");
        html.innerHTML = request.response;
        document.body.appendChild(html);
      } else {
        alert("error");
      }
    }
    // console.log("success");
    // const html = document.createElement("div");
    // html.innerHTML = request.response;
    // document.body.appendChild(html);
  };
  //   request.onerror = () => {
  //     console.log("error");
  //   };
  request.send();
};
$(".getHTML").on("click", getHTML);

//XML
const getXML = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.responseXML);
        let XML = request.responseXML;
        const text = XML.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};
// $(".getXML").on("click", getXML);
document.querySelector(".getXML").onclick = getXML;

//JSON
const getJSON = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        console.log(object);
        document.querySelector(".myName").textContent = object.name;
      }
    }
  };
  request.send();
};
document.querySelector(".getJSON").onclick = getJSON;

//getPage
let i = 2;
const getPage = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/page" + i);
  i++;
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          document.querySelector(".pages").appendChild(li);
        });
      }
    }
  };
  request.send();
};
document.querySelector(".getPage").onclick = getPage;
