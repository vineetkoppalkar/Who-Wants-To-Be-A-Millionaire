import React, { Component } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

import './WinModal.scss';

class WinModal extends Component {
  render() {
    const { title, open, resetGame, score, correctAnswer } = this.props;
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
            {title !== "Congratulations!" ? (
              <p className="modal-text">
                {`The correct answer is "${decodeURIComponent(correctAnswer)}"`}
              </p>
            ) : (
              <p className="modal-text">
                <span role="img" aria-label="party popper">🎉</span> You are a millionaire! <span role="img" aria-label="party popper">🎉</span>
              </p>
            )}
            <p className="modal-score-title">Your score:</p>
            <h1 className="modal-score">{score}</h1>
            <Button variant="contained" className="modal-btn" onClick={() => resetGame()}>
              Play Again
            </Button>
          </Paper>
        </Fade>
      </Modal>
    );
  }
}

export default WinModal;
