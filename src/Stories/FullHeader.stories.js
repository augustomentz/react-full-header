import React from 'react';
import FullHeader from '../Components/FullHeader';

export default {
  title: 'Components/FullHeader',
  component: FullHeader,
}

export const WithTitle = () => <FullHeader title='TDD' />;

export const WithTitleAndSubtitle = () => <FullHeader title='TDD' subtitle='What tested may never break' />;

export const WithBgColor = () =>  
  <FullHeader 
    title='TDD' 
    subtitle='What tested may never break'
    bgColor='#3299bb'
  />;
WithBgColor.storyName = 'With Title, Subtitle and BgColor';

export const WithTextColor = () =>  
  <FullHeader 
    title='TDD' 
    subtitle='What tested may never break'
    bgColor='#3299bb'
    textColor='#FF9900'
  />;
WithTextColor.storyName = 'With Title, Subtitle, BgColor and TextColor';

export const WithFontFamily = () =>  
  <FullHeader 
    title='TDD' 
    subtitle='What tested may never break'
    bgColor='#3299bb'
    textColor='#FF9900'
    font='cursive'
  />;
WithFontFamily.storyName = 'With Title, Subtitle, BgColor, TextColor and FontFamily';

export const WithBgImage = () => 
  <FullHeader
    title='TDD' 
    subtitle='What tested may never break' 
    bgImage='https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg'
  />;
WithBgImage.storyName = 'With Title, Subtitle and BgImage';

export const WithVideo = () => 
  <FullHeader
    title='TDD' 
    subtitle='What tested may never break' 
    video='https://www.youtube.com/embed/rUWxSEwctFU'
  />;
WithVideo.storyName = 'With Title, Subtitle and Video';

