import {useEffect, useState} from 'react';
import Layout from '../../common/components/Layout';
import {StyledText, StyledView} from '../../common/StyledComponents';

const DetailsPage = ({route}) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = route.params?.id;
  const user = route.params?.user;

  const getUserById = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const jsonData = await res.json();
      setUserData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, [id]);

  return (
    <Layout title="Details">
      {user ? (
        <StyledView className="w-full h-full justify-center items-center">
          <StyledText className="text-3xl">{user.name}</StyledText>
          <StyledText className="text-3xl">{user.email}</StyledText>
          <StyledText className="text-3xl">{user.company.name}</StyledText>
        </StyledView>
      ) : loading ? (
        <StyledView className="w-full h-full justify-center items-center">
          <StyledText className="text-3xl">Loading...</StyledText>
        </StyledView>
      ) : userData ? (
        <StyledView className="w-full h-full justify-center items-center">
          <StyledText className="text-3xl">{userData.name}</StyledText>
          <StyledText className="text-3xl">{userData.email}</StyledText>
          <StyledText className="text-3xl">{userData.company?.name}</StyledText>
        </StyledView>
      ) : (
        <StyledView className="w-full h-full justify-center items-center">
          <StyledText className="text-3xl">No user found</StyledText>
        </StyledView>
      )}
    </Layout>
  );
};

export default DetailsPage;
