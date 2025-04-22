import './ChessSquare.css';

interface ChessSquareInterface {
  id: string;
  squareType: string;
  piece: string;
  pieceSelected: boolean;
  selectedPiecePhase: (e: React.MouseEvent<HTMLDivElement>) => undefined | void;
  selectionPhase: boolean;
  selectedSquarePhase: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ChessSquare = ({
  id,
  squareType,
  piece,
  pieceSelected,
  selectedPiecePhase,
  selectionPhase,
  selectedSquarePhase,
}: ChessSquareInterface) => {
  
  const pieceChars: Record<string, string> = { T: '♜', H: '♞', B: '♝', Q: '♛', K: '♚', P: '♟' };
  
  return (
    <div
      id={id}
      className={`chess__square ${squareType} ${
        pieceSelected && 'selected__square__piece'
      } ${
        !pieceSelected && !selectionPhase && !piece && 'highlighted__square'
      }`}
      onClick={(!selectionPhase && !piece) ? selectedSquarePhase : undefined}
    >
      <span
        id={piece}
        className={`chess__piece ${
          piece && piece[0] === 'W' ? 'white' : 'black'
        }__piece ${piece && selectionPhase && 'selectable__piece'} ${
          pieceSelected && 'selected__piece'
        } ${!selectionPhase && !pieceSelected && 'no__pointer'}`}
        onClick={selectionPhase || pieceSelected ? selectedPiecePhase : undefined}
      >
        {pieceChars[piece[1]]}
      </span>
    </div>
  );
};

export default ChessSquare;
