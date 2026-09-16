import {ScrollView, View, Text, TextInput, StyleSheet, Image, SafeAreaView, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import styles from "./Styles";
import {RadioButton} from "react-native-paper";

function MainScreen(){
    const [petName, setPetName] = useState("");
    const [selectedValue, setSelectedValue]= useState("0");
    const [pet, setPet] = useState<string[]>([]);

    const renderPets = () => {
        const arrDisplay = [];

        for(let i=0; i < pet.length; i++){
            arrDisplay.push(
                <View key={i} style={styles.inputContainer}>
                     <Text style={styles.petTxt}>
                          {pet[i]}
                     </Text>
                </View>
            );
        }
        return arrDisplay;
    }

    return(
        <View>
            <SafeAreaView>
            <ScrollView>
                <Image style={styles.mogHubLogo}
                source={require("../_images/catImage.jpeg")}/>
                <Text style={styles.mainTxt}>Mog Hub</Text>
                <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n s</Text>

                <View style={styles.inputFlex}>
                    <Text style={styles.enterTxt}>Name Your Pet</Text>
                    <TextInput style={styles.userInputTxt}
                    placeholder="Mog"
                    value={petName}
                    onChangeText={newText => setPetName(newText)}
                    />
                </View>

                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>
                        Select Your Pet:
                    </Text>

                    <View style={styles.radioContainer}>
                        <View style={styles.radioGroup}>
                            {/* {radio button for cat} */}
                            <View style={styles.radioBtn}>
                                <RadioButton.IOS
                                    value="1"
                                    status={selectedValue == "1" ? "checked" : "unchecked"}
                                    onPress={() => setSelectedValue("1")}
                                    color="orange"
                                />
                                <Text style={styles.radioLabel}>Cat</Text>
                            </View>

                             {/* {radio button for dog} */}
                             <View style={styles.radioBtn}>
                                 <RadioButton.IOS
                                    value="2"
                                    status={selectedValue == "2" ? "checked" : "unchecked"}
                                    onPress={() => setSelectedValue("2")}
                                    color="orange"
                                />
                                <Text style={styles.radioLabel}>Dog</Text>
                            </View>

                             {/* {radio button for other} */}
                             <View style={styles.radioBtn}>
                                 <RadioButton.IOS
                                    value="3"
                                    status={selectedValue == "3" ? "checked" : "unchecked"}
                                    onPress={() => setSelectedValue("3")}
                                    color="orange"
                                />
                                <Text style={styles.radioLabel}>Other</Text>
                            </View>

                        </View>

                    </View>
                </View>
                <Button title="Add Pet" 
                   onPress={() => {
                    setPet([...pet, petName]);
                    setPetName("");
                   }}
                />
                <View style={styles.petContainer}>
                    {renderPets()}
                </View>
                <StatusBar style="auto"/>
                  
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}



export default styles;

