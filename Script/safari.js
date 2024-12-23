let url = $request.url;

if (/www\.google\.cn/.test(url)) {

    url = url.replace("www.google.cn", "www.google.com");
}

$done({ response: { status: 302, headers: { Location: url } } });
