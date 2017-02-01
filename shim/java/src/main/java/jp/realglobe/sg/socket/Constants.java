package jp.realglobe.sg.socket;

/**
 * Java binding of sg-socket-constants@1.3.13
 *
 * See https://github.com/realglobe-Inc/sg-socket-constants#readme for more details
 */
public class Constants {

    private Constants() {}

    public static final class AcknowledgeStatus {
        private AcknowledgeStatus() {}

        public static final String OK = "sg:acknowledge:ok";
        public static final String NG = "sg:acknowledge:ng";
    }

    public static final class AuthEvents {
        private AuthEvents() {}

        public static final String AUTHENTICATION = "authentication";
        public static final String AUTHENTICATED = "authenticated";
        public static final String UNAUTHORIZED = "unauthorized";
    }

    public static final class GreetingEvents {
        private GreetingEvents() {}

        public static final String HI = "sg:greet:hi";
        public static final String BYE = "sg:greet:bye";
    }

    public static final class LockingEvents {
        private LockingEvents() {}

        public static final String ALLOC = "sg:lock:alloc";
        public static final String RELEASE = "sg:lock:release";
        public static final String LOCK = "sg:lock:lock";
        public static final String UNLOCK = "sg:lock:unlock";
    }

    public static final class ObservingEvents {
        private ObservingEvents() {}

        public static final String START = "sg:remote:start";
        public static final String STOP = "sg:remote:stop";
        public static final String CHANGE = "sg:remote:change";
    }

    public static final class PubsubEvents {
        private PubsubEvents() {}

        public static final String RAISE = "sg:pubsub:raise";
        public static final String SHUT = "sg:pubsub:shut";
        public static final String PUBLISH = "sg:pubsub:publish";
        public static final String COUNT = "sg:pubsub:count";
        public static final String SUBSCRIBE = "sg:pubsub:subscribe";
        public static final String UNSUBSCRIBE = "sg:pubsub:unsubscribe";
        public static final String RECEIVE = "sg:pubsub:receive";
    }

    public static final class RemoteEvents {
        private RemoteEvents() {}

        public static final String SPEC = "sg:remote:spec";
        public static final String DESPEC = "sg:remote:despec";
        public static final String JOIN = "sg:remote:join";
        public static final String LEAVE = "sg:remote:leave";
        public static final String PERFORM = "sg:remote:perform";
        public static final String PIPE = "sg:remote:pipe";
    }

    public static final class ReservedEvents {
        private ReservedEvents() {}

        public static final String CONNECTION = "connection";
        public static final String CONNECT = "connect";
        public static final String RECONNECT = "reconnect";
        public static final String CONNECT_ERROR = "connect_error";
        public static final String CONNECT_TIMEOUT = "connect_timeout";
        public static final String DISCONNECT = "disconnect";
        public static final String ERROR = "error";
    }

}
