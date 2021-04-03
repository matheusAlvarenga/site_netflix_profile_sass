function changeTheme() {
    document.getElementById("check").click();

    if (document.getElementById("check").checked) {
        document
            .getElementById("body")
            .setAttribute("class", "profile-body light");
        return;
    }

    if (!document.getElementById("check").checked) {
        document
            .getElementById("body")
            .setAttribute("class", "profile-body dark");
        return;
    }
}
