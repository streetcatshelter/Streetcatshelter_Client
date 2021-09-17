import React from "react";

/* == Custom - Elements*/
import { Image, Grid, Text } from "../../elements";

/* == Library - style */
import styled from "styled-components";
import { MoreHorizontal } from "react-feather";

/* == Redux */
import { history } from "../../redux/configureStore";

const Profile = () => {
  return (
    <Wrapper>
      <Image width="70px" height="70px" borderRadius="35px" margin="auto" />
      <Grid margin="0px 0px 0px 20px" width="70%">
        <Grid>
          <Grid display="flex" justifyContent="space-between" width="95%">
            <Text fontWeight="800">채병훈하트정진우</Text>
            <EditBtn
              onClick={() => {
                history.push("/userinfoedit");
              }}
            />
          </Grid>
        </Grid>
        <Grid>
          <Text fontWeight="800">👑 대장냥</Text>
        </Grid>
        <Grid>
          <Text size="12px">평창동,망원동,하안동</Text>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

const EditBtn = styled(MoreHorizontal)`
  color: #b5bb19;
  cursor: pointer;
  &:hover {
    color: #be701d;
  }
`;
export default Profile;
