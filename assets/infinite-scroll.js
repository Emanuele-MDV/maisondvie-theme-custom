var elem = document.querySelector(isSettings.container);
if($(isSettings.path).length > 0){
  var infScroll = new InfiniteScroll( elem, {
    path: isSettings.path,
    append: isSettings.append,
    history: false,
    hideNav: isSettingsObj.hideNav,
    status: isSettingsObj.status
  });
}