import time
import hashlib

if __name__ == "__main__":
    print(hashlib.sha256(time.time().__str__().encode(
        encoding='UTF-8')).hexdigest()[:10])
