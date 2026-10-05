import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ScoreRing() {
return (
<View style={styles.ring}>
<View style={styles.shield}>
<MaterialIcons name="healing" size={35} color={colors.icon}
style={styles.shieldIcon}/>
</View>

<View style={styles.kidney}>
<MaterialCommunityIcons name="water-outline" size={35} color={colors.icon} />
</View>

<View style={styles.stomach}>
<MaterialCommunityIcons
name="stomach" size={35} color={colors.icon} style={styles.stomachIcon}/>
</View>

<View style={styles.heart}>
<MaterialCommunityIcons name="heart-outline" size={35} color={colors.icon} style={styles.heartIcon}/>
</View>

<View style={styles.brain}>
<MaterialCommunityIcons name="brain" size={35} color={colors.icon} style={styles.brainIcon}/>
</View>

<View style={styles.lungs}>
<MaterialCommunityIcons name="lungs" size={35} color={colors.icon} />
</View>

<View style={styles.dna}>
<MaterialCommunityIcons name="dna" size={35} color={colors.icon} style={styles.dnaIcon}/>
</View>

<View style={styles.bone}>
<MaterialCommunityIcons name="bone" size={35} color={colors.icon} />
</View>

<View style={styles.center}>
<Text style={styles.score}>8.8</Text>
<View style={styles.labelRow}>
<Text style={styles.label}>Tu puntaje de salud</Text>

<Ionicons name="information-circle-outline" size={14}color={colors.textMuted}
/>
</View>
</View>
</View>
);
}
const styles = StyleSheet.create({
ring: {
width: 280,
height: 280,
alignSelf: 'center',
},
center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
score: { fontSize: 72, fontWeight: 'bold', color: colors.text },
labelRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
label: { fontSize: 13, color: colors.textMuted },

shield: {
position: 'absolute',
left: 185,
top: 40,
width: 100,
height: 44,
borderRadius: 22,
backgroundColor: colors.yellow,
justifyContent: 'center',
alignItems: 'center',
transform: [{ rotate: '45deg' }],},

shieldIcon: { transform: [{ rotate: '-45deg' }] },
kidney: {position: 'absolute',
left: 135,
top: 15,
width: 50,
height: 50,
borderRadius: 30,
backgroundColor: colors.pink,
justifyContent: 'center',
alignItems: 'center',},

stomach: {
position: 'absolute',
left: 213,
top: 130,
width: 75,
height: 50,
borderRadius: 30,
backgroundColor: colors.green,
justifyContent: 'center',
alignItems: 'center',
transform: [{ rotate: '88deg' }],
}, stomachIcon: { transform: [{ rotate: '-88deg' }] },

heart: {position: 'absolute',
left: 150,
top: 230,
width: 110,
height: 44,
borderRadius: 22,
backgroundColor: colors.pink,
justifyContent: 'center',
alignItems: 'center',
transform: [{ rotate: '-30deg' }],},
heartIcon:{ transform: [{ rotate: '30deg' }] },

brain:{position: 'absolute',left: 30,
top: 230,
width: 110,
height: 44,
borderRadius: 22,
backgroundColor: colors.blue,
justifyContent: 'center',
alignItems: 'center',
transform: [{ rotate: '30deg' }],},
brainIcon:{ transform: [{ rotate: '-30deg' }] },

lungs:{position: 'absolute',left: 14,top: 140,width: 50,height: 70,
borderRadius: 30,
backgroundColor: colors.green,
justifyContent: 'center',
alignItems: 'center',},

dna:{position: 'absolute',
left:2,
top: 72,
width: 80,
height: 44,
borderRadius: 22,
backgroundColor: colors.yellow,
justifyContent: 'center',
alignItems: 'center',
transform: [{ rotate: '-65deg' }],},
dnaIcon:{ transform: [{ rotate: '65deg' }] },

bone:{position: 'absolute',left: 75,
top: 20,
width: 50,
height: 50,
borderRadius: 30,
backgroundColor: colors.blue,
justifyContent: 'center',
alignItems: 'center',
},
});