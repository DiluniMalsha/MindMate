import useDrivePicker from "react-google-drive-picker";
import CustomButton from "../button/CustomButton";


const GoogleDriverPickerComponent = () => {
    //eslint-disable-next-line
    const [openPicker, data, authResponce] = useDrivePicker();

    const handleOpenPicker = () => {
        try {
            openPicker({
                clientId: "785266234444-kv67hrloekodrgfs7kib0kqkrajfojeq.apps.googleusercontent.com",
                developerKey: "AIzaSyAT_Cc0UIr6cJyk1zHsknziqhabAQl1N6o",
                viewId: "DOCS",
                token: "ya29.a0AfB_byBluWfEw7G4dzxEpHceG1x7RTNNe2IzOscQh4IZfR-drUvswInt1buS7Qj-FmqvF7Rztifr5BEyaDXUHTyHcs3DDreNYquIFrLTSK64FnLixzRK7cA6K7XQE21nin4VUdT94pqs-5_AlKkmBYfKpQrNIT1MQ1LzaCgYKAQoSARASFQHGX2MiACL_3Jq0jEith_0JQbkDOA0171",
                showUploadView: true,
                showUploadFolders: true,
                supportDrives: true,
                multiselect: true,
                callbackFunction: pickerCallback
            })
        } catch (e) {
            console.log(e)
        }

    }

    function pickerCallback(data) {
        console.log("callback called......")
        console.log(data)
    }


    return (
        <>
            <CustomButton
                type="button"
                variant="cancel"
                radius="8"
                size="sm"
                className="mt-3 mb-4 button-mobile-response"
                fontSize="18"
                width="150"
                onclick={handleOpenPicker}
            >
                Open
            </CustomButton>
        </>
    );
};

export default GoogleDriverPickerComponent;