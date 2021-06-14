import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
  height: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const TitleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

const SummaryContainer = styled.View`
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const SummaryText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

const SummaryHeader = styled(SummaryText)`
  margin-bottom: 15px;
`;

const SummaryCreditsText = styled.Text`
  color: ${COLORS.GREY.BLACK_RUSSIAN};
  margin-top: 5px;
`;

const HeaderContainer = styled.View`
`;

const ImageHeader = styled.Image`
  width: 100%;
  height: 150px;
  margin-top: 10px;
`;

const BackIconContainer = styled.View`
  margin-top: 10px;
  margin-left: 10px;
`;

const PlayIconContainer = styled.View`
  margin-left: 10px;
`;

const MyListButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  margin-right: 10px;
`;

const MyListButtonText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  margin-left: 5px;
`;

class ShowDetailsScreen extends Component {
  render() {
    
    const {creator, image, starring, summary, title } = this.props.route.params 
    
    // const { params } = this.props.navigation.state;
    return (
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIconContainer>
              <Icon name={'arrow-left'} size={30} color={COLORS.WHITE.WHITE} />
            </BackIconContainer>
          </TouchableOpacity>
          <ImageHeader source={image} resizeMode={'contain'} />
          <TouchableOpacity onPress={() => {}}>
            <PlayIconContainer>
              <Icon name={'play-circle-o'} size={60} color={COLORS.WHITE.WHITE} />
            </PlayIconContainer>
          </TouchableOpacity>
        </HeaderContainer>
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <TouchableOpacity onPress={() => {}}>
            <MyListButton>
              <Icon name="plus" size={10} color={COLORS.WHITE.WHITE} />
              <MyListButtonText>{'MY LIST'}</MyListButtonText>
            </MyListButton>
          </TouchableOpacity>
        </TitleContainer>
        <SummaryContainer>
          <SummaryHeader>{'Summary'}</SummaryHeader>
          <SummaryText>{summary}</SummaryText>
          <SummaryCreditsText>{'Starring: '}{starring}</SummaryCreditsText>
          <SummaryCreditsText>{'Creator: '}{creator}</SummaryCreditsText>
        </SummaryContainer>
      </Container>
    );
  }
}

export default ShowDetailsScreen;