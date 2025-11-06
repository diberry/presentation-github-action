# Common issues and solutions
docker system prune -f          # Clean up Docker resources
act --list                      # Verify workflows detected
act --platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest  # Use compatible image
act --secret-file .secrets -v   # Verbose output with secrets loading