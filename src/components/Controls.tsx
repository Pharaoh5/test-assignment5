import styled from 'styled-components';

const ControlsContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  text-align: left;
`;

const ControlGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  color: black;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
  color: black;
`;

const Button = styled.button`
  width: 500px;
  padding: 8px 16px;
  background-color:rgb(209, 209, 209);
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid black;

  &:hover {
    box-shadow: 4px 4px 8px 0px rgba(29, 29, 29, 0.2); 
  }
`;

interface ControlsProps {
  autoRefresh: boolean;
  refreshInterval: number;
  onToggleAutoRefresh: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRefreshIntervalChange: (value: number) => void;
  onManualRefresh: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  autoRefresh,
  refreshInterval,
  onToggleAutoRefresh,
  onRefreshIntervalChange,
  onManualRefresh
}) => {
  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onRefreshIntervalChange(value);
  };

  return (
    <ControlsContainer>
      <ControlGroup>
        <Label>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={onToggleAutoRefresh}
            style={{ marginRight: '10px' }}
          /> Auto-refresh
        </Label>
      </ControlGroup>

      {autoRefresh && (
        <ControlGroup>
          <Label>
            <input
              type="number"
              min="1"
              max="60"
              value={refreshInterval}
              onChange={handleIntervalChange}
              style={{ marginRight: '10px', backgroundColor: 'white', color: 'black'}}
            /> Refresh every
          </Label>
        </ControlGroup>
      )}

      <ControlGroup>
        <Button className='btn-grad' onClick={onManualRefresh}>Get cat</Button>
      </ControlGroup>
    </ControlsContainer>
  );
};

export default Controls;