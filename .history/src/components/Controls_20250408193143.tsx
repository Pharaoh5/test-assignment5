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
  width: 200px;
  padding: 8px 16px;
  background-color:rgb(153, 153, 153);
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
  onRefreshIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onManualRefresh: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  autoRefresh,
  refreshInterval,
  onToggleAutoRefresh,
  onRefreshIntervalChange,
  onManualRefresh
}) => {
  return (
    <ControlsContainer>
      <ControlGroup>
        <Label>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={onToggleAutoRefresh}
            style={{ marginLeft: '10px' }}
          />
            Auto-refresh
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
              onChange={onRefreshIntervalChange}
              style={{ marginLeft: '10px', width: '50px' }}
            />
            Refresh every
          </Label>
        </ControlGroup>
      )}

      <ControlGroup>
        <Button onClick={onManualRefresh}>Get cat</Button>
      </ControlGroup>
    </ControlsContainer>
  );
};

export default Controls;