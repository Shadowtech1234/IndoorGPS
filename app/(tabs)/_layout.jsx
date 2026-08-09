import { Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#007AFF', // color of active tab
                tabBarInactiveTintColor: 'gray', //color of inactive tab
                headerShown: true, //show or hide top header bar
            }}
        >
            {/* left tab: profile */}
            <Tabs.Screen
                name="profile"
                options={{
                    title:"Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            {/* middle tab: home, with like th e maps and stuff */}
            <Tabs.Screen
                name="index"
                options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                    name={focused ? 'map' : 'map-outline'}
                    size={24}
                    color={color}
                    />
                ),
                }}
            />

            {/* right tab: settings */}
            <Tabs.Screen
                name="settings"
                options={{
                title: 'Settings',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                    name={focused ? 'settings' : 'settings-outline'}
                    size={24}
                    color={color}
                    />
                ),
                }}
            />
        </Tabs>
    );
}