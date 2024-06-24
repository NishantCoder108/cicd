## Install Node by curl in ubuntu

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

## Activate

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

## Apply the changes:

```bash
source ~/.bashrc
```

## Install lates node

```bash
nvm install node
```

## Set the default Node.js version (optional):

```bash
nvm alias default node
```

### Start by pm2

```bash
pm2 start npm --name "my-app" -- start
```
