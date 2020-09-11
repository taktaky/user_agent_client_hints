var userAgent = navigator.userAgent
document.getElementById('userAgent').innerHTML = userAgent
console.log(userAgent)

const ua = navigator.userAgentData;
if (ua == null) {
    console.log("User Agent Client Hints not supported.");
    document.getElementById("error").style.display = "block";
    document.getElementById("userAgentClientHints").style.display = "none";

} else {
    // Mobile
    document.getElementById('mobile').innerHTML = ua.mobile

    // Brands
    var tableData = "<tbody>"
    for (i = 0; i < ua.brands.length; i++) {
        tableData += "<tr><td>" + ua.brands[i].brand + "</td><td class=\"value\">" + ua.brands[i].version + "</td></tr>"
    }
    tableData += "</tbody>"
    document.getElementById('brands').innerHTML = tableData

    // High Entropy Values
    ua.getHighEntropyValues([
        "platform",
        "platformVersion",
        "architecture",
        "model",
        "uaFullVersion"
    ]).then(res => {
        document.getElementById('architecture').innerHTML = res["architecture"]
        document.getElementById('model').innerHTML = res["model"]
        document.getElementById('platform').innerHTML = res["platform"]
        document.getElementById('platformVersion').innerHTML = res["platformVersion"]
        document.getElementById('uaFullVersion').innerHTML = res["uaFullVersion"]
        console.log(res)
    });
}