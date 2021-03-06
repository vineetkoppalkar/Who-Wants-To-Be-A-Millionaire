import React, { Component } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

import AudiencePoll from './AudiencePoll';
import PhoneAFriend from './PhoneAFriend';

class LifeLineModal extends Component {
  getContent = () => {
    const { title, options, correctAnswerIndex } = this.props;
    switch (title) {
      case "Audience Poll":
        return <AudiencePoll options={options} correctAnswerIndex={correctAnswerIndex} />
      case "Phone a Friend":
        return <PhoneAFriend options={options} correctAnswerIndex={correctAnswerIndex} />
      case "Fifty-Fifty":
        return <p>Removing two WRONG answers</p>
      default:
        return null;
    }
  }

  render() {
    const { title, open, onClose } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal-container"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className="modal-content">
            <h2 className="modal-title">{title}</h2>
            {this.getContent()}
            <Button variant="contained" className="modal-btn" onClick={() => onClose()}>
              Close
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  }
}

export default LifeLineModal;
