import { Button, ButtonText, Box } from "@gluestack-ui/themed";

export default function Controls({ setVolume, volume }) {
    return (
        <Box
            flexDirection="row"
            mt="$8"
            borderColor="red"
            borderWidth={2}>

            <Button m="$4" size="xl" rounded="$xl"
                onPress={() => setVolume(volume + 250)}>
                <ButtonText>Add🥤</ButtonText>
            </Button>

            <Button m="$4" size="xl" rounded="$xl"
                onPress={() => setVolume(volume + 750)}>
                <ButtonText>Add🫙</ButtonText>
            </Button>

        </Box>
    )
}


