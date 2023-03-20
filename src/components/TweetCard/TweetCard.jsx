import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import {
  AvatarWrapper,
  Avatar,
  Button,
  Card,
  Header,
  OuterCircle,
  InnerCircle,
  Text,
  TextWrapper,
} from './TweetCard.styled';

export const TweetCard = ({
  user: { id, name, tweets, followers, avatar, isFollow },
  toggleFollow,
}) => {
  return (
    <Card>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <AvatarWrapper>
        <OuterCircle>
          <InnerCircle>
            <Avatar src={avatar} alt={name} />
          </InnerCircle>
        </OuterCircle>
      </AvatarWrapper>
      <TextWrapper>
        {/* <Text>{name}</Text> */}
        <Text>{tweets} tweets</Text>
        <Text>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} followers
        </Text>
      </TextWrapper>
      <Button
        type="button"
        onClick={() => toggleFollow(id)}
        isActive={isFollow}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};

TweetCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isFollow: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFollow: PropTypes.func.isRequired,
};
