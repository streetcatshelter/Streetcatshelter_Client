// LIBRARY
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';

// ICON
import { MoreHorizontal } from "react-feather";

// ROUTE
import { Link } from 'react-router-dom';

// REDUX
import { deleteCommunityDB } from '../../redux/modules/community';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditDeleteModal = (communityId) => {
  const dispatch = useDispatch();
  console.log(communityId);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCommunity = () => {
    dispatch(deleteCommunityDB(communityId));
  };

  return (
    <div>
      <Button style={{color:'rgb(249, 200, 82)'}} onClick={handleClickOpen}>
      <MoreHorizontal/>
      </Button>
      <Dialog style={{height:'33%', margin:'67vh 0 0 0'}} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          
          <Link to="/communitypostedit" style={{textDecoration:'none', color:'black'}}>
          <ListItem 
            button 
            style={{
                height:'11vh', 
                justifyContent:'center',
                fontSize:'24px',
                fontWeight:'bold',
                backgroundColor:'rgb(249, 200, 82)',
                }}
          //   onClick={() => {
          //     history.push({
          //       pathname: `/communitypostedit/${communityId.communityId}`,
          //       state: { communityId: communityId.communityId },
          //   });
          // }}
          >
            게시글 수정
          </ListItem>
          </Link>

          <Divider style={{height:'3px', backgroundColor:'white'}}/>
          
          <ListItem 
            button
            onClick={()=>alert('삭제 완료!')} 
            // onClick={deleteCommunity}
            style={{
                height:'11vh', 
                justifyContent:'center',
                fontSize:'24px',
                fontWeight:'bold',
                backgroundColor:'rgb(249, 200, 82)'
                }}>
              삭제
          </ListItem>

          <Divider style={{height:'3px', backgroundColor:'white'}}/>
          <ListItem
            onClick={handleClose}  
            button 
            style={{
                height:'12vh', 
                justifyContent:'center',
                fontSize:'24px',
                fontWeight:'bold',
                backgroundColor:'rgb(249, 200, 82)',
                position:'relative',
                }}>
              취소
          </ListItem>
      </Dialog>
    </div>
  );
}

export default EditDeleteModal;