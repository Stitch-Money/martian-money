export function buttonClickHandler(setClicked: (clicked: boolean) => void, propsOnClicked: () => void) {
    setClicked(true);

    if (propsOnClicked !== undefined) {
        propsOnClicked();
    }
}
