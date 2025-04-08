import styled from 'styled-components';

const ControlsContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const ControlGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color:rgb(153, 153, 153);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid black;

  &:hover {
    background-color:rgb(24, 24, 24);
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
          Auto-refresh:
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={onToggleAutoRefresh}
            style={{ marginLeft: '10px' }}
          />
        </Label>
      </ControlGroup>

      {autoRefresh && (
        <ControlGroup>
          <Label>
            Refresh every:
            <input
              type="number"
              min="1"
              max="60"
              value={refreshInterval}
              onChange={onRefreshIntervalChange}
              style={{ marginLeft: '10px', width: '50px' }}
            />
            seconds
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