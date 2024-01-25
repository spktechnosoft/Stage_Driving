import { View, Text, Modal, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, Switch, FlatList, PixelRatio, ActivityIndicator } from 'react-native';
import {React, useState, useEffect, useRef} from 'react';
import StyleComponent from './components/StyleComponent';
import BottomTabs from './components/BottomTabs';

const windowWidth = Dimensions.get('window').width;

const DummyMessagesFFF = [
    {
        Id:1,
        dateTime: "Mar 8 2012 08:00:00 AM",
        Message:"Just wanted to let you know that you've been on my mind.",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:2,
        dateTime: "Mar 8 2012 08:01:00 AM",
        Message:"Thinking of you and all the ways you make my life brighter, happier and funner. (That’s not a word, but it should be!)",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:3,
        dateTime: "Mar 8 2012 08:01:21 AM",
        Message:"You popped up on my social media feed, and it reminded me how much I adore you. Let’s catch up in real life soon!",
        SentStatus:false,
        ReplyId:2,
    },
    {
        Id:4,
        dateTime: "Mar 8 2012 08:02:00 AM",
        Message:"Love you! That's all!",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:5,
        dateTime: "Mar 8 2012 08:02:05 AM",
        Message:"This may sound cheesy, but I’m so grate-ful to have such a gouda friend.",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:6,
        dateTime: "Mar 8 2012 08:02:08 AM",
        Message:"Thinking about you and hoping you are well.",
        SentStatus:true,
        ReplyId:0,
    },
    {
        Id:7,
        dateTime: "Mar 8 2012 08:02:15 AM",
        Message:"I miss you! My life is just not as fun without you in it.",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:8,
        dateTime: "Mar 8 2012 08:00:05 AM",
        Message:"Eating chocolate-chip cookie dough will always remind me of you—and will always make me smile!",
        SentStatus:false,
        ReplyId:0,
    },
    {
        Id:9,
        dateTime: "Mar 8 2012 08:01:03 AM",
        Message:"Just a quick note to tell you I’m thinking about you!",
        SentStatus:true,
        ReplyId:0,
    },
    {
        Id:10,
        dateTime: "Mar 8 2012 08:02:50 AM",
        Message:"My favorite memories are the ones with you in them.",
        SentStatus:true,
        ReplyId:6,
    },
    {
        Id:11,
        dateTime: "Mar 8 2012 08:03:12 AM",
        Message:"Call me if you get bored, or want to hear a joke, or anytime—I’ll always answer.",
        SentStatus:false,
        ReplyId:10,
    },
];

const DummyMessagesReply = [

    {
        Id:1,
        dateTime: "Mar 8 2012 08:01:00 AM",
        Message:"Thinking of you and all the ways you make my life brighter, happier and funner. (That’s not a word, but it should be!)",
        SentStatus:false,
        ReplyId:1,
    },
    {
        Id:2,
        dateTime: "Mar 8 2012 08:01:21 AM",
        Message:"You popped up on my social media feed, and it reminded me how much I adore you. Let’s catch up in real life soon!",
        SentStatus:false,
        ReplyId:1,
    },
    {
        Id:10,
        dateTime: "Mar 8 2012 08:02:50 AM",
        Message:"My favorite memories are the ones with you in them.",
        SentStatus:true,
        ReplyId:5,
    },
    {
        Id:11,
        dateTime: "Mar 8 2012 08:03:12 AM",
        Message:"Call me if you get bored, or want to hear a joke, or anytime—I’ll always answer.",
        SentStatus:false,
        ReplyId:10,
    },
];

const ForumScreen = ({navigation}) => {
    const [MessageSendingText, setMessageSendingText] = useState(null);

    const [DummyMessages, SetDummyMessages] = useState(DummyMessagesFFF);

    const [ActivityIndicatorStatus, SetActivityIndicatorStatus ]= useState(false);
    const [viewHeight, setViewHeight] = useState(0);
    const [viewHeightMessageSending, setViewHeightMessageSending] = useState(0);
    const scrollViewRef = useRef();

    useEffect(()=>{
        scrollToBottom();
    },[]);

    useEffect(()=>{
        SetActivityIndicatorStatus(false);
        setMessageSendingText(null);
        scrollToBottom();
    },[DummyMessages]);

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };
  const onLayoutMessageSending = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeightMessageSending(height);
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    };
  };
  

  return (
    <View style={StyleComponent.ScreenContainer}>
    <View style={StyleComponent.headerNav}>
      <TouchableOpacity style={[StyleComponent.headerBackBtnTouch]} onPress={()=>navigation.goBack()}>
      <Image source={require('./assets/img/backBtn.png')} style={[StyleComponent.headerBackBtn]} />
      </TouchableOpacity>
      <Text style={StyleComponent.HeaderEventTitle}>Rock n Roll Italy</Text>
      </View>
      <View style={[StyleComponent.mainBody, {position:'relative',}]}>
      
      <View onLayout={onLayout} style={[StyleComponent.ForumScreenWelcomeMessageTopView,{zIndex:1,}]}>
            <Text style={StyleComponent.ForumScreenWelcomeMessageTopViewText}>
        Welcome to Event forum & discussion channel, you can ask or answer questions related to the event. Please be polite & humble to others, respect others & don't use foul language.
            </Text>
      </View>

      <ScrollView ref={scrollViewRef} style={{width:windowWidth,}}>
      <View style={{width:windowWidth, marginBottom:viewHeightMessageSending+20, paddingHorizontal:15, marginTop:viewHeight+15,}}>


      {
        DummyMessages.map((item, index)=>{
            return(
        <View key={item.Id}>
        <View style={[StyleComponent.ForumScreenMessageView,{alignSelf:item.SentStatus!==true?'flex-start':'flex-end',}]}>
            {
                item.SentStatus!==true ? <View style={StyleComponent.ForumScreenMessageViewIconView} >
                <Image style={StyleComponent.ForumScreenMessageViewIcon} source={require('./assets/img/BlueRobotIcon.png')} />
                </View> : ''
            }
            <TouchableOpacity style={[StyleComponent.ForumScreenMessageViewTouch,{backgroundColor:item.SentStatus!==true?'#EEE':'#FF8616', borderTopRightRadius:item.SentStatus!==true?25:0, borderBottomLeftRadius:item.SentStatus!==true?0:25,}]}>
                <Text style={[StyleComponent.ForumScreenMessageViewTouchText, {color:item.SentStatus!==true?'#505050':'#fff',}]}>{item.Message}</Text>
            </TouchableOpacity>
        </View>
        {
            DummyMessagesReply.map((Rep,RepIndex)=>{
                return(
                    <View key={Rep.Id}>
                    {
                        item.Id===Rep.ReplyId && Rep.SentStatus===false ?
                        <View style={[StyleComponent.ForumScreenMessageView,{marginLeft:30, marginTop:0,}]}>
        <View style={StyleComponent.ForumScreenMessageViewIconView} >
        <Image style={StyleComponent.ForumScreenMessageViewIcon} source={require('./assets/img/BlueRobotIcon.png')} />
        </View>
        <TouchableOpacity style={StyleComponent.ForumScreenMessageViewTouch}>
            <Text style={StyleComponent.ForumScreenMessageViewTouchText}>{Rep.Message}</Text>
        </TouchableOpacity>
    </View>
                        :''
                    }
                    </View>
                )
            })
        }
        </View>
        
            )
        })
      }

      </View>
      </ScrollView>

      <View onLayout={onLayoutMessageSending} style={StyleComponent.ForumScreenMessageSendingView}>

      <TextInput
      style={StyleComponent.ForumScreenMessageSendingTextInput}
      placeholder='Write your message'
      placeholderTextColor='#8A9AAC'
      value={MessageSendingText}
      onChangeText={(text)=>setMessageSendingText(text)}
       />
       {ActivityIndicatorStatus===true?<ActivityIndicator size="small" color="#0000ff" />:''}
       <TouchableOpacity style={StyleComponent.ForumScreenMessageSendingTouch} onPress={()=>{
        
        const maxId = DummyMessages.reduce((max, item)=> (item.Id > max ? item.Id : max), 0);
        const newItemId = maxId + 1;
        
        var newItem = {
        Id: newItemId,
        dateTime: new Date().getMonth()+' '+new Date().getDay()+' '+new Date().getTime(),
        Message:MessageSendingText,
        SentStatus:true,
        ReplyId:0, };
        SetDummyMessages([...DummyMessages, newItem]);
        SetActivityIndicatorStatus(true);
        console.log(DummyMessages);
       }}>
       <Image style={StyleComponent.ForumScreenMessageSendingTouchIcon} source={require('./assets/img/SendButtonIcon.png')} />
       </TouchableOpacity>

      </View>

      </View>

      <BottomTabs navigation={navigation} screen={'Stage'} />
    </View>
  );
}

export default ForumScreen;