import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
    {...props}
    scrollEnabled= {false}
    >
        <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical:
        20, backgroundColor: '#f0f0f0'}}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Hola desde el Drawer</Text>
         
        </View>
     <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer