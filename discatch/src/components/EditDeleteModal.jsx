import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

// ICON
import { MoreHorizontal } from "react-feather";

// ROUTE
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditDeleteModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                }}>
            게시글 수정
          </ListItem>
          </Link>

          <Divider style={{height:'3px', backgroundColor:'white'}}/>
          
          <ListItem 
            button
            onClick={()=>alert('삭제 완료!')} 
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